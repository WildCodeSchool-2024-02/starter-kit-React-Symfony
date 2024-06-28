<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/api', name: 'app_api_category')]
class ApiCategoryController extends AbstractController
{
    #[Route('/categories', name: 'app_api_categories')]
    public function getCategories(
        CategoryRepository $categoryRepository,
        SerializerInterface $serializer
    ): JsonResponse {
        $categories = $serializer->serialize($categoryRepository->findAll(), 'json', ['groups' => 'getCategories']);
        return new JsonResponse($categories, Response::HTTP_OK, [], true);
    }

    #[Route('/category/{id}', name: 'app_api_category')]
    public function getOne(Category $category): Response
    {
        return $this->json($category, Response::HTTP_OK);
    }

    #[Route('/category/{id}/edit', name: 'app_api_category_edit')]
    public function update(
        Request $request,
        EntityManagerInterface $entityManager,
        Category $category
    ): Response {
        $category->setName($request->toArray()['name']);
        $entityManager->persist($category);
        $entityManager->flush();
        return $this->json($category, Response::HTTP_OK);
    }

    #[Route('/category/{id}', name: 'app_api_category_delete', methods: ['DELETE'])]
    public function delete(Category $category, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($category);
        $entityManager->flush();
        return $this->json(['deleted' => true], Response::HTTP_OK);
    }
}
