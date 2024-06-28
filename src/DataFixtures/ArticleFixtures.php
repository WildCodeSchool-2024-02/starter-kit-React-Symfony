<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ArticleFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        for ($j = 1; $j < 4; $j++) {
            for ($i = 1; $i < 4; $i++) {
                $article = new Article();
                $article->setTitle('Article ' . $i . "_" . $j);
                $article->setDescription('Description ' . $i . "_" . $j);
                $article->setImage('https://picsum.photos/300/200');
                $article->setCategory($this->getReference('Category_' . $j));
                $manager->persist($article);
            }
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            CategoryFixtures::class
        ];
    }
}
