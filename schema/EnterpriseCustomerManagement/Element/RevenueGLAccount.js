var Modeler = require("../Modeler.js");
var className = 'ElementRevenueGLAccount';

var ElementRevenueGLAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RevenueGLAccount: {
      type: "TypeGLAccountType",
      wsdlDefinition: {
        name: "RevenueGLAccount",
        type: "GLAccountType",
        "xsd:annotation": {
          "xsd:documentation": "A GL Account for recognizing revenue"
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
	  RevenueGLAccount: {
      type: "TypeGLAccountType",
      wsdlDefinition: {
        name: "RevenueGLAccount",
        type: "GLAccountType",
        "xsd:annotation": {
          "xsd:documentation": "A GL Account for recognizing revenue"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRevenueGLAccount;
Modeler.register(ElementRevenueGLAccount, "ElementRevenueGLAccount");
