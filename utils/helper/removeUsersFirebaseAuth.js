/**
 * This function is set to run every 2 seconds. It automates the process of deleting a user from Firebase Auth.
 * It simulates the following steps:
 * 1. Click on the 3 dots next to the user.
 * 2. Click on the delete account option.
 * 3. Click on the delete button in the confirmation dialog.
 */
setInterval(() => {
  // Define the classes for the elements we want to interact with
  const userOptionsButtonClass =
    "mat-mdc-menu-trigger mat-mdc-tooltip-trigger edit-account-button mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base";
  const deleteAccountOptionClass =
    "mat-mdc-menu-item mat-mdc-focus-indicator ng-star-inserted";
  const confirmDeleteButtonClass =
    "confirm-button mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base";

  // Click on 3 dots next to user
  const userOptionsButton = document.getElementsByClassName(
    userOptionsButtonClass
  )[0];
  if (userOptionsButton) userOptionsButton.click();

  // Wait for the options to load
  setTimeout(() => {
    // Click on delete account
    const deleteAccountOption = document.getElementsByClassName(
      deleteAccountOptionClass
    )[2];
    if (deleteAccountOption) deleteAccountOption.click();

    // Wait for the confirmation dialog to load
    setTimeout(() => {
      // Click on delete in confirmation dialog
      const confirmDeleteButton = document.getElementsByClassName(
        confirmDeleteButtonClass
      )[0];
      if (confirmDeleteButton) confirmDeleteButton.click();
    }, 500);
  }, 500);
}, 2000);
