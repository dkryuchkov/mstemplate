var Modeler = require("../Modeler.js");
var className = 'ElementBargainingUnitReference';

var ElementBargainingUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BargainingUnitReference: {
      type: "TypeBargainingUnitReferenceType",
      wsdlDefinition: {
        name: "BargainingUnitReference",
        type: "BargainingUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Bargaining Unit object. A bargaining unit is a group of employees with a clear and identifiable community of interests for the purpose of collective bargaining and other dealings with management. Examples would be \"non-management professors\", \"law enforcement professionals\", \"blue-collar workers\", \"clerical and administrative employees\" etc."
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
	  BargainingUnitReference: {
      type: "TypeBargainingUnitReferenceType",
      wsdlDefinition: {
        name: "BargainingUnitReference",
        type: "BargainingUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Bargaining Unit object. A bargaining unit is a group of employees with a clear and identifiable community of interests for the purpose of collective bargaining and other dealings with management. Examples would be \"non-management professors\", \"law enforcement professionals\", \"blue-collar workers\", \"clerical and administrative employees\" etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBargainingUnitReference;
Modeler.register(ElementBargainingUnitReference, "ElementBargainingUnitReference");
