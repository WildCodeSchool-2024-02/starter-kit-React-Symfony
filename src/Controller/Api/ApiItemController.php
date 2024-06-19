<?php

namespace App\Controller\Api;

use App\Entity\Item;
use App\Repository\ItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

#[Route('api/', name: 'api_')]
class ApiItemController extends AbstractController
{
    #[Route('items', name: 'items', methods: ['GET'])]
    public function getAll(ItemRepository $itemRepository, SerializerInterface $serializer): JsonResponse
    {
        $items = $serializer->serialize($itemRepository->findAll(), 'json');

        return new JsonResponse($items, Response::HTTP_OK, [], true);
    }

    #[Route('item/{id}/edit', name: 'item', methods: ['GET', 'PUT'])]
    public function edit(
        Request $request,
        EntityManagerInterface $entityManager,
        Item $item,
        SerializerInterface $serializer,
    ): JsonResponse {

        if ($request->isMethod('GET')) {
            $itemJson = $serializer->serialize($item, 'json');
            return new JsonResponse($itemJson, JsonResponse::HTTP_OK, [], true);
        }

        $updateItem = $serializer->deserialize($request->getContent(), Item::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $item]);
        $content = $request->toArray();
        $updateItem->setTitle($content['title']);
        $entityManager->persist($updateItem);
        $entityManager->flush();
        $itemJson = $serializer->serialize($updateItem, 'json');
        return new JsonResponse($itemJson, JsonResponse::HTTP_OK, [], true);
    }

    #[Route('item/{id}', name: 'deleteItem', methods: ['DELETE'])]
    public function delete(Item $item, EntityManagerInterface $entityManager): JsonResponse
    {
        $entityManager->remove($item);
        $entityManager->flush();

        return new JsonResponse(['redirectUrl' => $this->generateUrl('app_item')], JsonResponse::HTTP_OK);
    }
}
