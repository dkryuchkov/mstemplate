var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreditMemoReferenceType';

var TypeCustomCreditMemoReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreditMemoReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditMemoReferenceType",
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
	  CustomCreditMemoReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditMemoReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreditMemoReferenceType;
Modeler.register(TypeCustomCreditMemoReferenceType, "TypeCustomCreditMemoReferenceType");
