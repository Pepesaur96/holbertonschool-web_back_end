Pagination involves dividing a large dataset into smaller, more manageable chunks or pages. Typically, pagination is used in web development when fetching and displaying data in a user interface. The two common parameters used for pagination are page and page_size.

Here's a simple example in Python to demonstrate how you can implement pagination for a dataset using the page and page_size parameters:

    def paginate(dataset, page=1, page_size=10):
        """
        Paginate a dataset based on page and page_size parameters.

        Args:
        - dataset: The entire dataset to be paginated.
        - page: The current page to be retrieved (default is 1).
        - page_size: The number of items to be included in each page (default is 10).

        Returns:
        - A tuple containing the paginated data and metadata (current_page, total_pages, total_items).
        """
        total_items = len(dataset)
        total_pages = (total_items + page_size - 1) // page_size  # Calculate total pages

        start_index = (page - 1) * page_size
        end_index = start_index + page_size

        paginated_data = dataset[start_index:end_index]

        return paginated_data, {
            'current_page': page,
            'total_pages': total_pages,
            'total_items': total_items
        }

    # Example usage:
    my_dataset = list(range(1, 101))  # Sample dataset from 1 to 100
    current_page = 2
    items_per_page = 20

    result, metadata = paginate(my_dataset, page=current_page, page_size=items_per_page)

    print(f"Page {metadata['current_page']} of {metadata['total_pages']}")
    print(f"Total items: {metadata['total_items']}")
    print(f"Paginated data: {result}")

In this example, the paginate function takes the entire dataset, the current page, and the desired page size as parameters. It then calculates the start and end indices to extract the relevant portion of the dataset for the specified page. The function returns a tuple containing the paginated data and metadata (current page, total pages, total items).

Adjust the my_dataset, current_page, and items_per_page variables to test the function with different datasets and pagination parameters.

When you're dealing with paginating a dataset using hypermedia metadata, it typically involves providing links or references within the response that guide the client on how to navigate through the paginated data. This approach is often used in RESTful APIs and follows the principles of HATEOAS (Hypermedia As The Engine Of Application State).

Here's a simple example in Python using a dictionary to represent hypermedia metadata within the paginated response:

    def paginate_with_hypermedia(dataset, page=1, page_size=10):
        """
        Paginate a dataset with hypermedia metadata.

        Args:
        - dataset: The entire dataset to be paginated.
        - page: The current page to be retrieved (default is 1).
        - page_size: The number of items to be included in each page (default is 10).

        Returns:
        - A dictionary representing the paginated response with hypermedia metadata.
        """
        total_items = len(dataset)
        total_pages = (total_items + page_size - 1) // page_size  # Calculate total pages

        start_index = (page - 1) * page_size
        end_index = start_index + page_size

        paginated_data = dataset[start_index:end_index]

        response = {
            'data': paginated_data,
            'metadata': {
                'current_page': page,
                'total_pages': total_pages,
                'total_items': total_items,
            },
            'links': {}
        }

        # Add hypermedia links
        if page > 1:
            response['links']['prev'] = f'/api/resource?page={page-1}&page_size={page_size}'
        if page < total_pages:
            response['links']['next'] = f'/api/resource?page={page+1}&page_size={page_size}'

        return response

    # Example usage:
    my_dataset = list(range(1, 101))  # Sample dataset from 1 to 100
    current_page = 2
    items_per_page = 20

    result = paginate_with_hypermedia(my_dataset, page=current_page, page_size=items_per_page)

    print(f"Page {result['metadata']['current_page']} of {result['metadata']['total_pages']}")
    print(f"Total items: {result['metadata']['total_items']}")
    print(f"Paginated data: {result['data']}")
    print(f"Links: {result['links']}")

In this example, the paginate_with_hypermedia function includes a 'links' section in the response, containing 'prev' and 'next' links based on the current page. The client can use these links to navigate to the previous and next pages, respectively.

Modify the my_dataset, current_page, and items_per_page variables to test the function with different datasets and pagination parameters. Adjust the link format according to your API design.

Pagination in a deletion-resilient manner involves handling cases where items in the dataset may be deleted between requests. To ensure consistency and avoid skipping or duplicating items, you can use techniques such as cursor-based pagination or keyset pagination. These approaches rely on unique identifiers and provide a more robust solution when dealing with deletions.

Here's an example using cursor-based pagination in Python:

    def paginate_with_cursor(dataset, cursor=None, page_size=10):
        """
        Paginate a dataset in a deletion-resilient manner using cursor-based pagination.

        Args:
        - dataset: The entire dataset to be paginated.
        - cursor: A unique identifier indicating the starting point for pagination.
        - page_size: The number of items to be included in each page (default is 10).

        Returns:
        - A dictionary representing the paginated response with cursor-based metadata.
        """
        # Find the index of the cursor in the dataset
        if cursor is not None and cursor in dataset:
            start_index = dataset.index(cursor) + 1
        else:
            start_index = 0

        paginated_data = dataset[start_index:start_index + page_size]

        response = {
            'data': paginated_data,
            'metadata': {
                'cursor': dataset[start_index + page_size] if start_index + page_size < len(dataset) else None,
                'total_items': len(dataset),
            },
        }

        return response

    # Example usage:
    my_dataset = list(range(1, 101))  # Sample dataset from 1 to 100
    my_dataset.remove(42)  # Simulate a deletion

    cursor_value = 42  # Use the deleted item as a cursor
    items_per_page = 20

    result = paginate_with_cursor(my_dataset, cursor=cursor_value, page_size=items_per_page)

    print(f"Cursor: {result['metadata']['cursor']}")
    print(f"Total items: {result['metadata']['total_items']}")
    print(f"Paginated data: {result['data']}")

In this example, the paginate_with_cursor function uses a cursor (in this case, the unique identifier of the last item on the previous page) to start pagination from the correct point. It also checks for deletions by verifying if the cursor still exists in the dataset.

Adjust the my_dataset, cursor_value, and items_per_page variables to test the function with different datasets and pagination parameters. Depending on your application and requirements, you may need to use a more sophisticated approach, like keyset pagination, which involves using the values of specific fields instead of indices.
