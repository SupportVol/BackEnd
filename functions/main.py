"""
Module docstring: This module contains a Cloud Function for Firebase that responds to HTTP requests.
"""

from firebase_functions import https_fn
from firebase_admin import initialize_app
import unittest
from unittest.mock import MagicMock

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


class TestCloudFunction(unittest.TestCase):
    """
    This method is a setup method for the unittest.TestCase class. It initializes a mock request object with a GET method, empty headers, and no body.

    Args:
        self (unittest.TestCase): The instance of the unittest.TestCase class.

    Returns:
        None
    """

    def setUp(self):
        self.request = MagicMock()
        self.request.method = "GET"
        self.request.headers = {}
        self.request.body = None

    def test_on_request_example(self):
        """
        This method tests the 'on_request_example' function by calling it with a mock request object and asserting that the returned response has a status code of 200.

        Args:
            self (unittest.TestCase): The instance of the unittest.TestCase class.

        Returns:
            None
        """
        response = on_request_example(self.request)
        self.assertEqual(response.status_code, 200)
