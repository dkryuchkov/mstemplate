var Modeler = require("../Modeler.js");
var className = 'TypeCustomLegislativeDataGroupReferenceType';

var TypeCustomLegislativeDataGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLegislativeDataGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLegislativeDataGroupReferenceType",
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
	  CustomLegislativeDataGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLegislativeDataGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLegislativeDataGroupReferenceType;
Modeler.register(TypeCustomLegislativeDataGroupReferenceType, "TypeCustomLegislativeDataGroupReferenceType");
