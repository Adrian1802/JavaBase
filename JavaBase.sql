CREATE TABLE Info_User (
  User_ID INT primary key,
  Username VARCHAR(255),
  Email VARCHAR(255),
  Age INT,
  Password VARCHAR(255)
);

INSERT INTO Info_User (User_ID, Username, Email, Age, Password)
VALUES
  (1, 'Redentor', 'redentorsandalan@gmail.com', 20, '1524'),
  (2, 'Melchor', 'melchoradrianlibarnes', 21, '2318'),
  (3, 'Hans', 'Hanscedricmatias@gmail.com', 20, '189'),
  (4, 'Von', 'vonfredly@gmail.com', 20, '1785');



CREATE TABLE products (
  ProductID INT primary key,
  ProductName VARCHAR(255),
  Category VARCHAR(255),
  SubCategory VARCHAR(255),
  Description varchar(255),
  Brand VARCHAR(255),
  ProductPrice DECIMAL(10, 2)
);

INSERT INTO products (ProductID, ProductName, Category, SubCategory, Description, Brand, ProductPrice)
VALUES
  (1, 'Apple Ipad', 'Gadgets', 'Apple', 'The 9th generation Apple iPad is a powerful and versatile tablet that combines sleek design with cutting-edge features.', 'iOS', 21990),
  (2, 'Apple iPhone 11', 'Mobile Phone', 'Smartphone', 'The iPhone 11 is powered by Apple''s A13 Bionic chip, providing lightning-fast performance and smooth multitasking.', 'iOS', 25190),
  (3, 'Airpods', 'Wearables', 'Portable Media Player', '3rd Generation with Lightning Charging Case', 'iOS', 11990),
  (4, 'Apple Pencil', 'Stylus', 'Drawing Instrument', '2nd Gen', 'iOS', 8690),
  (5, 'Apple MacBook Air', 'Foldable Portable Personal Computer', 'Digital Computer', 'MacBook Air is designed with the following features to reduce its environmental impact', 'iOS', 57990),
  (6, 'Apple Earpods Lightning Connector', 'Wearables', 'Portable Media Player', 'The design of the EarPods is defined by the geometry of the ear. Which makes them more comfortable for more people than any other earbud-style headphones.', 'iOS', 1190),
  (7, 'Apple - AirPods Max - Green', 'Wearables', 'Portable Media Player', 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.', 'iOS', 32990),
  (8, 'Apple Space Gray HomePod Mini', 'Audio Devices', 'Portable Media Player', 'HomePod mini delivers unexpectedly big sound for a speaker of its size.', 'iOS', 5468),
  (9, 'Apple AirTag - 4 pack', 'Accessories', 'Tracking Device', 'AirTag is an easy way to keep track of your stuff. Attach one to your keys. Put another in your backpack.', 'iOS', 6490);



create table Categories(
CategoryID int primary key,
CategoryName varchar(max)
);

INSERT INTO Categories (CategoryID, CategoryName)
VALUES 
  (1, 'Mobile Phone'),
  (2, 'Wearables'),
  (3, 'Stylus'),
  (4, 'Foldable Portable Personal Computer'),
  (5, 'Audio Devices'),
  (6, 'Accessories'),
  (7, 'Appliances');

  select * from Categories;

  Create table SubCategories(
  SubCategoryID int primary key,
  SubCatName varchar(max),
  );

  select * from SubCategories;

  insert into SubCategories(SubCategoryID,SubCatName)
 VALUES 
  (1, 'Smartphone'),
  (2, 'Portable Media Player'),
  (3, 'Drawing Instrument'),
  (4, 'Digital Computer'),
  (5, 'Tracking Device'),
  (6, 'Watch'),
  (7, 'Set-Top Box');


  Create table Brand(
  BrandID int primary key,
 BrandName varchar(max),
  );

  select * from Brand;

  insert into Brand(BrandID,BrandName)
 VALUES 
  (1, 'iOS');
 

