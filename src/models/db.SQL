
CREATE TABLE haleKaiola(
    association_id SERIAL PRIMARY KEY,
    documentCategoryName VARCHAR(255),
    numberOfFiles NUMERIC(10,2),
    files VARCHAR(255)
);


-- use mongoDB!