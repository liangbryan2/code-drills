DROP DATABASE IF EXISTS stockDB;
CREATE database stockDB;

USE stockDB;

CREATE TABLE stock (
-- YOUR CODE HERE --

id INT NOT NULL AUTO_INCREMENT,
date VARCHAR(50),
open FLOAT,
high DECIMAL(4,2),
low DECIMAL(4,2),
close FLOAT,
volume INT,
PRIMARY KEY (id)


-- END CODE AREA --
);

SELECT * FROM stock;
