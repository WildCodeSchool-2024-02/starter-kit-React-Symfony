<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    #[Route('/{slug}', name: 'app_main_slug', requirements: ['slug' => '.+'], priority: -1)]
    public function index(string $slug = ""): Response
    {
        return $this->render('home/index.html.twig', [
            'slug' => $slug
        ]);
    }
}
