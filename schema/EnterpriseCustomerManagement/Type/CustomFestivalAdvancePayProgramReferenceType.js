var Modeler = require("../Modeler.js");
var className = 'TypeCustomFestivalAdvancePayProgramReferenceType';

var TypeCustomFestivalAdvancePayProgramReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFestivalAdvancePayProgramReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFestivalAdvancePayProgramReferenceType",
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
	  CustomFestivalAdvancePayProgramReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFestivalAdvancePayProgramReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFestivalAdvancePayProgramReferenceType;
Modeler.register(TypeCustomFestivalAdvancePayProgramReferenceType, "TypeCustomFestivalAdvancePayProgramReferenceType");
