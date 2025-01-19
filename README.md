The best store


# Installing sequelize Database ORM

1.  
  A. npm i sequelize -S

  B. npm i sequelize-cli --save-dev


# Initialize sequelize in the project

2. npm sequelize init

# After sequelize initialization all folders and files have been created
# Edit the file config/config.json and set the database credentials for each env

# Create the database from CLI

3. npx sequelize db:create

# Create a model from CLI
# This command will create both migration and a model in the models folder


4. npx sequelize-cli model:generate --name:Product --attributes name:string,description:string,amount:integer


# Create a migration via the cli

5. npx sequelize-cli migration:generate --name <migration-name>


# run all migration via the cli

6. npx sequelize-cli db:migrate


# run specific migration - provide the name of the migration

npx sequelize-cli db:migrate <migration-name>
