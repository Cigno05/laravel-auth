<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        for ($i=0; $i < 20 ; $i++) {

            $project = new Project();

            $project->title = $faker->sentence(1,4);
            $project->slug = $faker->sentence(2);
            $project->description = $faker->sentence(10, 30);
            $project->creation_date = $faker->dateTimeBetween('-6 mounths', 'now');
            $project->link = $faker->url();

            $project->save();


        }
    }
}
