const raspi = require('raspi');
const gpio = require('raspi-gpio');
const sleep = require('sleep');

const GREEN = new gpio.DigitalOutput('GPIO14');
const YELLOW = new gpio.DigitalOutput('GPIO21');

/**
 * LED点滅のパターンを指定して実行します。
 * @param {number} output DigitalOutputインスタンス 
 * @param {number} times 点滅回数
 * @param {number} interval 点滅間隔(ミリ秒)
 */
const chika = (output, times, interval) => {
  for(let i = 0; i < times; i++) {
    output.write(gpio.HIGH);
    sleep.msleep(interval);

    output.write(gpio.LOW);
    sleep.msleep(interval);
  }
};

/**
 * ラズパイ実行します。 
 */
raspi.init(() => {
  while(true) {
    chika(GREEN, 3, 500);
    chika(YELLOW, 3, 500);

    sleep.msleep(2000);

    chika(GREEN, 5, 200);
    sleep.msleep(500);

    chika(YELLOW, 5, 200);
    sleep.msleep(1000);
  }
});

