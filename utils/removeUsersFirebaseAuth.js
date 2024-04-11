setInterval(() => {
  // click on 3 dots next to user
  document
    .getElementsByClassName(
      "mat-mdc-menu-trigger mat-mdc-tooltip-trigger edit-account-button mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"
    )[0]
    .click();
  // click on delete account
  document
    .getElementsByClassName(
      "mat-mdc-menu-item mat-mdc-focus-indicator ng-star-inserted"
    )[2]
    .click();
  // click on delete in confirmation dialog
  document
    .getElementsByClassName(
      "confirm-button mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base"
    )[0]
    .click();
  // changed timer to 2000 as it was not deleting after 500ms
}, 2000);
