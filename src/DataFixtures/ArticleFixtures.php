<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ArticleFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();
        foreach (CategoryFixtures::CATEGORIES as $categoryName) {
            for ($i = 1; $i < 4; $i++) {
                $article = new Article();
                $article->setTitle($faker->word());
                $article->setDescription($faker->text(100));
                $article->setImage('https://picsum.photos/id/' . rand(1, 250) . '/498/200');
                $article->setCategory($this->getReference($categoryName));
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
