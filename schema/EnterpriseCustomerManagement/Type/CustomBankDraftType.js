var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankDraftType';

var TypeCustomBankDraftType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankDraftType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankDraftType",
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
	  CustomBankDraftType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankDraftType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankDraftType;
Modeler.register(TypeCustomBankDraftType, "TypeCustomBankDraftType");
