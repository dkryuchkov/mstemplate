var Modeler = require("../Modeler.js");
var className = 'ElementBillOfLadingReference';

var ElementBillOfLadingReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfLadingReference: {
      type: "TypeBillOfLadingReferenceType",
      wsdlDefinition: {
        name: "BillOfLadingReference",
        type: "BillOfLadingReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A bill of lading is a document issued by a carrier, e.g. a ship's master or by a company's shipping department, acknowledging that specified goods have been received on board as cargo for conveyance to a named place for delivery to the consignee"
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
	  BillOfLadingReference: {
      type: "TypeBillOfLadingReferenceType",
      wsdlDefinition: {
        name: "BillOfLadingReference",
        type: "BillOfLadingReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A bill of lading is a document issued by a carrier, e.g. a ship's master or by a company's shipping department, acknowledging that specified goods have been received on board as cargo for conveyance to a named place for delivery to the consignee"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfLadingReference;
Modeler.register(ElementBillOfLadingReference, "ElementBillOfLadingReference");
