var Modeler = require("../Modeler.js");
var className = 'ElementEmployeePartyReference';

var ElementEmployeePartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmployeePartyReference: {
      type: "TypeEmployeePartyReferenceType",
      wsdlDefinition: {
        name: "EmployeePartyReference",
        type: "EmployeePartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual who provides services for compensation to an employer and whose duties are under the control of the employer"
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
	  EmployeePartyReference: {
      type: "TypeEmployeePartyReferenceType",
      wsdlDefinition: {
        name: "EmployeePartyReference",
        type: "EmployeePartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual who provides services for compensation to an employer and whose duties are under the control of the employer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmployeePartyReference;
Modeler.register(ElementEmployeePartyReference, "ElementEmployeePartyReference");
