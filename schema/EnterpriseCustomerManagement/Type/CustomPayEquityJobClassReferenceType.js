var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayEquityJobClassReferenceType';

var TypeCustomPayEquityJobClassReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayEquityJobClassReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayEquityJobClassReferenceType",
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
	  CustomPayEquityJobClassReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayEquityJobClassReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayEquityJobClassReferenceType;
Modeler.register(TypeCustomPayEquityJobClassReferenceType, "TypeCustomPayEquityJobClassReferenceType");
