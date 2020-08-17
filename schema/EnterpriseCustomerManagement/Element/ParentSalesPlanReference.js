var Modeler = require("../Modeler.js");
var className = 'ElementParentSalesPlanReference';

var ElementParentSalesPlanReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSalesPlanReference: {
      type: "TypeSalesPlanReferenceType",
      wsdlDefinition: {
        name: "ParentSalesPlanReference",
        type: "SalesPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesPlan which is a parent of another SalesPlan. This allows for hierachical relationship between instances of SalesPlan."
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
	  ParentSalesPlanReference: {
      type: "TypeSalesPlanReferenceType",
      wsdlDefinition: {
        name: "ParentSalesPlanReference",
        type: "SalesPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesPlan which is a parent of another SalesPlan. This allows for hierachical relationship between instances of SalesPlan."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSalesPlanReference;
Modeler.register(ElementParentSalesPlanReference, "ElementParentSalesPlanReference");
