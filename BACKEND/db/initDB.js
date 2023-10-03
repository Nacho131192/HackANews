const sendQuery = require('./connectToDB');

require('dotenv').config();

async function main() {
  let connection;

  try {
    sendQuery('CREATE SCHEMA IF NOT EXISTS newsdb DEFAULT CHARACTER SET utf8 ')
    sendQuery('USE newsdb');

    sendQuery('DROP TABLE IF EXISTS likes');
    sendQuery('CREATE TABLE likes (
  id int NOT NULL AUTO_INCREMENT,
  new_id int unsigned NOT NULL,
  user_id int unsigned NOT NULL,
  PRIMARY KEY (id),
  KEY fk_new_likes_idx (new_id),
  KEY fk_user_likes_idx (user_id),
  CONSTRAINT fk_new_likes FOREIGN KEY (new_id) REFERENCES news (id) ON DELETE RESTRICT ON UPDATE CASCADE,
      CONSTRAINT`fk_user_likes` FOREIGN KEY(`user_id`) REFERENCES`users`(user_id`
  )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3');
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

main();
