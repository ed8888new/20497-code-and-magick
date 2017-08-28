'use strict';

var WIZARD_CUSTOMIZATION = [{
  name: [['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон'], ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
}];

var wizardCounter = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var randomValue = function (x) {
  return (Math.floor(x.length * Math.random()));
};

var elemCustomization = function (x) {
  return (x[randomValue(x)]);
};

var wizardsBox = function () {
  var wizardsSetting = {
    name: elemCustomization(WIZARD_CUSTOMIZATION[0].name[0]) + ' ' + elemCustomization(WIZARD_CUSTOMIZATION[0].name[1]),
    coatColor: elemCustomization(WIZARD_CUSTOMIZATION[0].coatColor),
    eyesColor: elemCustomization(WIZARD_CUSTOMIZATION[0].eyesColor),
  };
  return wizardsSetting;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createSimilarElement = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardCounter; i++) {
    fragment.appendChild(renderWizard(wizardsBox()));
  }
  return fragment;
};

similarListElement.appendChild(createSimilarElement());
userDialog.querySelector('.setup-similar').classList.remove('hidden');
