var Modeler = require("../Modeler.js");
var className = 'TypeCustomParentBankruptcyType';

var TypeCustomParentBankruptcyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomParentBankruptcyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentBankruptcyType",
        attribute: false,
        type: "xsd:string"
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
	  CustomParentBankruptcyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentBankruptcyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomParentBankruptcyType;
Modeler.register(TypeCustomParentBankruptcyType, "TypeCustomParentBankruptcyType");
