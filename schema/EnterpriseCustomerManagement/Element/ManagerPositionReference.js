var Modeler = require("../Modeler.js");
var className = 'ElementManagerPositionReference';

var ElementManagerPositionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManagerPositionReference: {
      type: "TypePositionReferenceType",
      wsdlDefinition: {
        name: "ManagerPositionReference",
        type: "PositionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a position which is a functional manager of another position. Manager is a worker/employee one reports to from the organizational perspective (i.e., what you would see in an organizational chart). A closely related term is supervisor/supervision. This is used in the context of a reporting structure for a specific project or assignment. It is also often called operational manager."
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
	  ManagerPositionReference: {
      type: "TypePositionReferenceType",
      wsdlDefinition: {
        name: "ManagerPositionReference",
        type: "PositionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a position which is a functional manager of another position. Manager is a worker/employee one reports to from the organizational perspective (i.e., what you would see in an organizational chart). A closely related term is supervisor/supervision. This is used in the context of a reporting structure for a specific project or assignment. It is also often called operational manager."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManagerPositionReference;
Modeler.register(ElementManagerPositionReference, "ElementManagerPositionReference");
