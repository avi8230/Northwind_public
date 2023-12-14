# northwind-back-end
A local REST API for Northwind data, containing: 
- Products including images
- Employees including images
- Categories including images
- Contact Us
- Register
- Login

## Installation:
```
npm i -g northwind-back-end  
```
(You must install it globally using the ```-g``` flag so the backend could be started via cli command)

## CLI Commands: 
- Run the REST API:
```
northwind  
```
- Display help: 
```
northwind --help 
```
- Display version: 
```
northwind --version
```

## The API

### Products:
- ```GET``` ```http://localhost:3030/api/products``` &rarr; get all products
- ```GET``` ```http://localhost:3030/api/products/delayed``` &rarr; get all products with a 3sec delay
- ```GET``` ```http://localhost:3030/api/products/7``` &rarr; get product #7
- ```GET``` ```http://localhost:3030/api/products/delayed/7``` &rarr; get product #7 with a 3sec delay
- ```POST``` ```http://localhost:3030/api/products``` &rarr; add a new product
- ```PUT``` ```http://localhost:3030/api/products/7``` &rarr; update product #7
- ```DELETE``` ```http://localhost:3030/api/products/7``` &rarr; delete product #7
- ```GET``` ```http://localhost:3030/api/products/images/7.jpg``` &rarr; get product #7's image

### Employees:
- ```GET``` ```http://localhost:3030/api/employees``` &rarr; get all employees
- ```GET``` ```http://localhost:3030/api/employees/7``` &rarr; get employee #7
- ```POST``` ```http://localhost:3030/api/employees``` &rarr; add a new employee
- ```PUT``` ```http://localhost:3030/api/employees/7``` &rarr; update employee #7
- ```DELETE``` ```http://localhost:3030/api/employees/7``` &rarr; delete employee #7
- ```GET``` ```http://localhost:3030/api/employees/images/7.jpg``` &rarr; get employee #7's image

### Categories:
- ```GET``` ```http://localhost:3030/api/categories``` &rarr; get all categories
- ```GET``` ```http://localhost:3030/api/categories/7``` &rarr; get category #7
- ```POST``` ```http://localhost:3030/api/categories``` &rarr; add a new category
- ```PUT``` ```http://localhost:3030/api/categories/7``` &rarr; update category #7
- ```DELETE``` ```http://localhost:3030/api/categories/7``` &rarr; delete category #7
- ```GET``` ```http://localhost:3030/api/categories/images/7.jpg``` &rarr; get category #7's image
- Note: for using the categories you must register or logged-in.

### Contact Us:
- ```GET``` ```http://localhost:3030/api/contact-us``` &rarr; get all contact-us messages
- ```POST``` ```http://localhost:3030/api/contact-us``` &rarr; add a new contact-us message

### Auth:
- ```POST``` ```http://localhost:3030/api/auth/register``` &rarr; register as a new user
- ```POST``` ```http://localhost:3030/api/auth/login``` &rarr; login as an existing user