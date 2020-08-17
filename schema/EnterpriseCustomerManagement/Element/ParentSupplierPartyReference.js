var Modeler = require("../Modeler.js");
var className = 'ElementParentSupplierPartyReference';

var ElementParentSupplierPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        name: "ParentSupplierPartyReference",
        type: "SupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A parent supplier party is typically used in modeling the hierarchy of a supplier's different operational locations. For example, a branch office may have a head office defined as a Parent supplier"
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
	  ParentSupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        name: "ParentSupplierPartyReference",
        type: "SupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A parent supplier party is typically used in modeling the hierarchy of a supplier's different operational locations. For example, a branch office may have a head office defined as a Parent supplier"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSupplierPartyReference;
Modeler.register(ElementParentSupplierPartyReference, "ElementParentSupplierPartyReference");
