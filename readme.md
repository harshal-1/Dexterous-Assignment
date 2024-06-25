# Node.js Assignment

## Objective
Create a Node.js backend that utilizes MongoDB to manage information about various 3D printing materials.

1. Setting Up the Server

-clone the repository to your local system
-make sure to have Node.js and npm installed
-open the terminal and run the following commands
-npm install
-nodemon index.js

Now server would start running on Port 3001

## Project Structure

project-directory/
├── confg/
│ └── db.js
├── controllers/
│ └── materialController.js
├── middlewares/
│ └── asyncHandler.js
├── models/
│ └── materialModel.js
├── routes/
│ └── materialRoutes.js
│ └── uploadRoutes.js
├── uploads/
├── .env
├── index.js
├── package.json
└── README.md

2. Testing API Endpoints

--Testing could be done via Postman(preferred) or any online API testing tool

1) Get Material:

    GET /api/materials
    It would return the list of all the materials present in the database

    Eg:
    Request - GET Request on http://localhost:3001/api/materials
    Response: 200 Ok Success
    [
        {
            "_id": "60c72b2f9b1d8c1b8c8e4f0a",
            "name": "PLA",
            "technology": "FDM",
            "colors": ["Red", "Blue", "Green"],
            "pricePerGram": 0.03,
            "applicationTypes": ["Prototyping", "Educational"],
            "createdAt": "2021-06-14T09:12:15.812Z",
            "updatedAt": "2021-06-14T09:12:15.812Z"
        }
        ...
    ]

2) Post Material:

    POST /api/materials along with the body
    It would add a new Material to the database

    Eg:
    Request - POST Request on http://localhost:3001/api/materials
    Body - raw JSON
    {
        "name": "TPU",
        "technology": "FDM",
        "colors": ["Black", "White", "Red"],
        "pricePerGram": 0.08,
        "applicationTypes": ["Flexible Parts", "Wearables"],
        "imageUrl": "https://example.com/images/tpu.jpg"
    }

    Response: 200 Ok Success
    {
        "name": "TPU",
        "technology": "FDM",
        "colors": [
            "Black",
            "White",
            "Red"
        ],
        "pricePerGram": 0.08,
        "applicationTypes": [
            "Flexible Parts",
            "Wearables"
        ],
        "imageUrl": "https://example.com/images/tpu.jpg",
        "_id": "667a6c602ef62b0285916b31",
        "createdAt": "2024-06-25T07:06:08.574Z",
        "updatedAt": "2024-06-25T07:06:08.574Z",
        "__v": 0
    }

3) Get Material By Id:

    GET /api/materials/:id
    It would return the material matching that specific id in the database otherwise state material not found if material does not exist in the database.

    Eg:
    Request - GET Request on http://localhost:3001/api/materials/667a60f760e3b40176ea9059
    Response: 200 Ok Success
    {
        "_id": "667a60f760e3b40176ea9059",
        "name": "Resin",
        "technology": "SLA",
        "colors": [
            "Clear",
            "Gray"
        ],
        "pricePerGram": 0.1,
        "applicationTypes": [
            "Dental",
            "Miniatures"
        ],
        "imageUrl": "http://localhost:3001/uploads/image3.jpg",
        "createdAt": "2024-06-25T06:17:27.133Z",
        "updatedAt": "2024-06-25T06:22:10.120Z",
        "__v": 0
    }

4) Update Material:

    PUT /api/materials/:id along with the body
    It would update the Material, matching with the id, with the new data provided in the body, to the database.

    Eg:
    Request - PUT Request on http://localhost:3001/api/materials/667a6c602ef62b0285916b31
    Body - raw JSON
    {
        "name": "abcd",
        "technology": "FDM",
        "colors": ["Black", "White", "Red", "Yellow"],
        "pricePerGram": 0.2,
        "applicationTypes": ["Flexible Parts", "Wearables", "Electronics"],
        "imageUrl": "https://example.com/images/abcd.jpg"
    }

    Response: 200 Ok Success
    {
        "_id": "667a6c602ef62b0285916b31",
        "name": "abcd",
        "technology": "FDM",
        "colors": [
            "Black",
            "White",
            "Red",
            "Yellow"
        ],
        "pricePerGram": 0.2,
        "applicationTypes": [
            "Flexible Parts",
            "Wearables",
            "Electronics"
        ],
        "imageUrl": "https://example.com/images/abcd.jpg",
        "createdAt": "2024-06-25T07:06:08.574Z",
        "updatedAt": "2024-06-25T07:11:23.384Z",
        "__v": 0
    }


5) Delete Material:

    DELETE /api/materials/:id
    It would delete the material with the specified id from the database.

    Eg:
    Request - DELETE Request on http://localhost:3001/api/materials/667a6c602ef62b0285916b31
    Response: 200 Ok Success
    {
        "_id": "667a6c602ef62b0285916b31",
        "name": "abcd",
        "technology": "FDM",
        "colors": [
            "Black",
            "White",
            "Red",
            "Yellow"
        ],
        "pricePerGram": 0.2,
        "applicationTypes": [
            "Flexible Parts",
            "Wearables",
            "Electronics"
        ],
        "imageUrl": "https://example.com/images/abcd.jpg",
        "createdAt": "2024-06-25T07:06:08.574Z",
        "updatedAt": "2024-06-25T07:11:23.384Z",
        "__v": 0
    }


3. Upload Image:

Have created an upload route along with the upload image function which could be integrated at the frontend to store the image to the local file system along with the url for reference in the database in MongoDB.

 - images would be saved in uploads folder in the root directory
 - uploadRoutes is present in the routes folder along with materialRoutes.