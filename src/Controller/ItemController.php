<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ItemController extends AbstractController
{
    #[Route('/items', name: 'app_item')]
    public function index(): Response
    {
        return $this->render('item/index.html.twig', [
            'controller_name' => 'ItemController',
        ]);
    }

    #[Route('/item/{id}', name: 'app_edit_items')]
    public function edit(int $id): Response
    {

        return $this->render('item/edit.html.twig', [
            'id' => $id,
        ]);
    }
}
