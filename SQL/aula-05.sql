drop table courses;
create table courses (
id tinyint unsigned auto_increment not null,
name varchar (255) not null,
hours tinyint unsigned not null,
primary key (id)
);

describe courses;


insert into courses (name, hours) values
('Programador Web', 240),
('Informatica para o mundo do trabalho', 160),
('Ferramentas Digitais', 60);

select*from courses;
drop table estudants;
create table estudants (
id smallint unsigned auto_increment not null,
name varchar (255) not null,
street varchar (255) not null,
neighborhood varchar (255) not null,
city varchar (255) not null,
course tinyint unsigned not null,
primary key (id),
foreign key (course) references courses(id)
);

describe estudants;



insert into estudants
(name, street, neighborhood, city, course)
values
('Emanuel', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Mario', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Samila', 'Rua A', 'Bairro B', 'Cidade C', 2);

select * From estudants;

select estudants.name, courses.name from estudants 
inner join courses
on estudants.course = courses.id;

ORDER BY studants.name;

DROP TABLE phones;
CREATE TABLE phones(
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    number VARCHAR(255) NOT NULL,
    studant SMALLINT UNSIGNED NOT NULL,
  
	PRIMARY KEY(id),
    FOREIGN KEY(studant) REFERENCES studants(id) ON DELETE CASCADE
);

DESCRIBE phones;

INSERT INTO phones (number, studant) VALUES
('(88) 8888-8888', 1),
('(99) 9999-9999', 1),
('(00) 0000-0000', 2),
('(77) 7777-7777', 3);

SELECT * FROM phones;

SELECT studants.name, phones.number
FROM phones INNER JOIN studants
ON phones.studant = studants.id
ORDER BY studants.name;

SELECT * FROM studants;
DELETE FROM studants WHERE id = 1;