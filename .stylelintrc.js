module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-prettier", "stylelint-scss"],
  "rules": {
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true
  }
}