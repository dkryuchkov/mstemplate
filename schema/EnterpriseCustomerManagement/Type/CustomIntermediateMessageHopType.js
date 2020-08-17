var Modeler = require("../Modeler.js");
var className = 'TypeCustomIntermediateMessageHopType';

var TypeCustomIntermediateMessageHopType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomIntermediateMessageHopType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomIntermediateMessageHopType",
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
	  CustomIntermediateMessageHopType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomIntermediateMessageHopType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomIntermediateMessageHopType;
Modeler.register(TypeCustomIntermediateMessageHopType, "TypeCustomIntermediateMessageHopType");
