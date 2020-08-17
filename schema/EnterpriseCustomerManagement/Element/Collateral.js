var Modeler = require("../Modeler.js");
var className = 'ElementCollateral';

var ElementCollateral = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Collateral: {
      type: "TypeCollateralType",
      wsdlDefinition: {
        name: "Collateral",
        type: "CollateralType",
        "xsd:annotation": {
          "xsd:documentation": "Assets used to support the approval and security of the line of credit",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  Collateral: {
      type: "TypeCollateralType",
      wsdlDefinition: {
        name: "Collateral",
        type: "CollateralType",
        "xsd:annotation": {
          "xsd:documentation": "Assets used to support the approval and security of the line of credit",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCollateral;
Modeler.register(ElementCollateral, "ElementCollateral");
