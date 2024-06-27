<?php

namespace App\Controller\Api;

use App\Entity\Item;
use App\Repository\ItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

#[Route('api/', name: 'api_')]
class ApiItemController extends AbstractController
{
    #[Route('items', name: 'items_list', methods: ['GET'])]
    public function getAll(ItemRepository $itemRepository): Response
    {
        return $this->json($itemRepository->findAll(), Response::HTTP_OK);
    }

    #[Route('item/{id}', name: 'item_fetch', methods: ['GET'])]
    public function getOne(
        Item $item,
    ): Response {
        return $this->json($item, Response::HTTP_OK);
    }

    #[Route('items/{id}', name: 'item_put', methods: ['PUT'])]
    public function update(
        Request $request,
        EntityManagerInterface $entityManager,
        Item $item,
    ): Response {
        $item->setTitle($request->toArray()['title']);
        $entityManager->persist($item);
        $entityManager->flush();
        return $this->json($item, Response::HTTP_OK);
    }

    #[Route('items/{id}', name: 'item_delete', methods: ['DELETE'])]
    public function delete(
        Item $item,
        EntityManagerInterface $entityManager
    ): Response {
        $entityManager->remove($item);
        $entityManager->flush();

        return $this->json(['redirectUrl' => $this->generateUrl('app_list')], Response::HTTP_OK);
    }
}
