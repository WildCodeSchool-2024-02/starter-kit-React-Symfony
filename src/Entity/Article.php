<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArticleRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['getAllArticles', 'getOneArticle', 'getOneCategory'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['getAllArticles', 'getOneArticle', 'getOneCategory'])]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['getAllArticles', 'getOneArticle', 'getOneCategory'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['getAllArticles', 'getOneArticle', 'getOneCategory'])]
    private ?string $image = null;

    #[ORM\ManyToOne(inversedBy: 'articles')]
    #[Groups(['getOneArticle'])]
    private ?Category $category = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }
}
