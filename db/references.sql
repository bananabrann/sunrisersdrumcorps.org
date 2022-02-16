-- Create the initial Users table.
CREATE TABLE [dbo].Users (
  id INT IDENTITY PRIMARY KEY NOT NULL,
  username VARCHAR(180) NOT NULL,
  password VARCHAR(420) NOT NULL,
  superpowers BIT NOT NULL
);

-- Create the initial News table.
CREATE TABLE [dbo].News (
  id INT IDENTITY PRIMARY KEY NOT NULL,
  slug VARCHAR(180),
  title TEXT,
  published DATE,
  draft BIT NOT NULL,
  content TEXT,
)
