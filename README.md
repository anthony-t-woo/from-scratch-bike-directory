!['wireframe for bike directory app'](/assets/wireframe.jpeg)

# HTML Setup

## On Home Page Load

    - Clickable return to home button in nav bar
    - Empty Div that will contain list of rendered elements

## On Detail Page Load

    - Clickable return to home button in nav bar
    - Empty Div that will contain details of bike including name, image, category, and wheel size

# JavaScript

## On Home Page app.js

### DOM

    - Bike list container

### State

    - let bikesData =[];

### Events

    - page load
        - fetch data from supabase
        - assign to state
        - display elements from state

## On details Page detail.js

### DOM

    - Bike detail container

### State

    - let bikeData =[];

### Events

    - page load
        - get url params
        - get id from url params
        - fetch data from supabase with id
        - assign to state
        - display elements from state
