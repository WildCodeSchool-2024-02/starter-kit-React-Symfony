<?php

namespace App\Controller\Api;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api', name: 'app_api_article')]
class ApiArticleController extends AbstractController
{
    #[Route('/articles', name: 'app_api_articles')]
    public function getAll(
        ArticleRepository $articleRepository
    ): Response {
        return $this->json($articleRepository->findAll(), Response::HTTP_OK, [], ['groups' => 'getAllArticles']);
    }

    #[Route('/article/{id}', name: 'app_api_article')]
    public function getOne(Article $article): Response
    {
        return $this->json($article, Response::HTTP_OK, [], ['groups' => 'getOneArticle']);
    }

    #[Route('/article/{id}/edit', name: 'app_api_article_edit')]
    public function update(
        Request $request,
        EntityManagerInterface $entityManager,
        Article $article
    ): Response {
        $article->setTitle($request->toArray()['title']);
        $article->setDescription($request->toArray()['description']);
        $article->setImage($request->toArray()['image']);
        $article->setCategory($request->toArray()['category']);
        $entityManager->persist($article);
        $entityManager->flush();
        return $this->json($article, Response::HTTP_OK, [], ['groups' => 'getOneArticle']);
    }

    #[Route('/article/{id}', name: 'app_api_article_delete', methods: ['DELETE'])]
    public function delete(Article $article, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($article);
        $entityManager->flush();
        return $this->json(['deleted' => true], Response::HTTP_OK);
    }
}
