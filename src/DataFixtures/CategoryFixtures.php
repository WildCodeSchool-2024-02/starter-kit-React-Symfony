<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        for ($i = 1; $i < 4; $i++) {
            $category = new Category();
            $category->setName('Category ' . $i);
            $this->addReference('Category_' . $i, $category);
            $manager->persist($category);
        }

        $manager->flush();
    }
}
