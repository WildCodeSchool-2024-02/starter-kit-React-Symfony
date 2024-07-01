<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'app_api_')]
class ApiCategoryController extends AbstractController
{
    #[Route('/categories', name: 'categories', methods: ['GET'])]
    public function getAll(CategoryRepository $categoryRepository): Response
    {
        return $this->json($categoryRepository->findAll(), Response::HTTP_OK, [], ['groups' => 'getCategories']);
    }

    #[Route('/category/{id}', name: 'category', methods: ['GET'])]
    public function getOne(Category $category): Response
    {
        return $this->json($category, Response::HTTP_OK, [], ['groups' => 'getCategories']);
    }

    #[Route('/category/{id}/edit', name: 'category_edit', methods: ['PUT'])]
    public function update(Category $category, EntityManagerInterface $entityManager, Request $request): Response
    {
        $category->setName($request->toArray()['name']);
        $entityManager->persist($category);
        $entityManager->flush();
        return $this->json($category, Response::HTTP_OK, [], ['groups' => 'getCategories']);
    }

    #[Route('/category/{id}', name: 'category', methods: ['DELETE'])]
    public function delete(Category $category, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($category);
        $entityManager->flush();
        return $this->json(['deleted' => true], Response::HTTP_OK);
    }
}
