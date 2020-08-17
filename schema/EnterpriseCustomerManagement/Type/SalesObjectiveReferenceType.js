var Modeler = require("../Modeler.js");
var className = 'TypeSalesObjectiveReferenceType';

var TypeSalesObjectiveReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesObjectiveIdentification: {
      type: "TypeSalesObjectiveIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesObjectiveIdentification",
        type: "SalesObjectiveIdentificationType",
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
	  SalesObjectiveIdentification: {
      type: "TypeSalesObjectiveIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesObjectiveIdentification",
        type: "SalesObjectiveIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesObjectiveReferenceType;
Modeler.register(TypeSalesObjectiveReferenceType, "TypeSalesObjectiveReferenceType");
