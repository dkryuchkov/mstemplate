var Modeler = require("../Modeler.js");
var className = 'ElementGLAccount';

var ElementGLAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GLAccount: {
      type: "TypeGLAccountType",
      wsdlDefinition: {
        name: "GLAccount",
        type: "GLAccountType",
        "xsd:annotation": {
          "xsd:documentation": "A valid account code combination from the Chart Of Accounts. Each GL Element represents an account code"
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
	  GLAccount: {
      type: "TypeGLAccountType",
      wsdlDefinition: {
        name: "GLAccount",
        type: "GLAccountType",
        "xsd:annotation": {
          "xsd:documentation": "A valid account code combination from the Chart Of Accounts. Each GL Element represents an account code"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGLAccount;
Modeler.register(ElementGLAccount, "ElementGLAccount");
