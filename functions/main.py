"""
Module docstring: This module contains a Cloud Function for Firebase that responds to HTTP requests.
"""

from firebase_functions import https_fn
from firebase_admin import initialize_app

initialize_app()


@https_fn.on_request()
def on_request_example(req: https_fn.Request) -> https_fn.Response:
    """
    This function is an example of a Cloud Function for Firebase that responds to HTTP requests.
    It returns a simple "Hello World!" response for any incoming request.

    Args:
        req (https_fn.Request): The request object.

    Returns:
        https_fn.Response: A response object with a status code and optional body.
    """
    return https_fn.Response(f"Hello world! {req}")
