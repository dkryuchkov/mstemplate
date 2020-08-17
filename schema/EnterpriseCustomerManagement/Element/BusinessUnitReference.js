var Modeler = require("../Modeler.js");
var className = 'ElementBusinessUnitReference';

var ElementBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "BusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Business Unit is a unit of an enterprise that performs one or many business functions and a unit of an enterprise that can be consolidated in both a managerial and legal hierarchy. Other than that, it is a loosely defined unit of an organization and it is left to the users of the application to decide how business units should be constructed and used"
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
	  BusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "BusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Business Unit is a unit of an enterprise that performs one or many business functions and a unit of an enterprise that can be consolidated in both a managerial and legal hierarchy. Other than that, it is a loosely defined unit of an organization and it is left to the users of the application to decide how business units should be constructed and used"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessUnitReference;
Modeler.register(ElementBusinessUnitReference, "ElementBusinessUnitReference");
