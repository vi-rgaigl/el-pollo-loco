let level1 = new Level(
[
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin()
],
[
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle()
],
[
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss()
],
[
    new Cloud('./img/5_background/layers/4_clouds/1.png', -700),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 0),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 700),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 700*2),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 700*3),
    new Cloud('./img/5_background/layers/4_clouds/1.png', 700*4)
],
[
    new BackgroundObject('./img/5_background/layers/air.png', -720+1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -720+1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -720+1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -720+1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/air.png',0 , 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/2_second_layer/1.png',0, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/air.png',  720-1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 720-1, 0,480, 720),
    new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 720-1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 720-1, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/air.png',  720*2-2, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 720*2-2, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 720*2-2, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 720*2-2, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/air.png',  720*3-3, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 720*3-3, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 720*3-3, 0, 480, 720),
    new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 720*3-3, 0, 480, 720)
]
);

