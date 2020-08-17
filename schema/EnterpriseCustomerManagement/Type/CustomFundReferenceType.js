var Modeler = require("../Modeler.js");
var className = 'TypeCustomFundReferenceType';

var TypeCustomFundReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFundReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFundReferenceType",
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
	  CustomFundReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFundReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFundReferenceType;
Modeler.register(TypeCustomFundReferenceType, "TypeCustomFundReferenceType");
