var Modeler = require("../Modeler.js");
var className = 'TypeTaskReferenceType';

var TypeTaskReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaskIdentification",
        type: "TaskIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
	  TaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaskIdentification",
        type: "TaskIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTaskReferenceType;
Modeler.register(TypeTaskReferenceType, "TypeTaskReferenceType");
