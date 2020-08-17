var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactInterestedProductsType';

var TypeListOfContactInterestedProductsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InterestedProducts: {
      type: "TypeInterestedProductsType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:InterestedProducts",
        type: "InterestedProductsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  InterestedProducts: {
      type: "TypeInterestedProductsType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:InterestedProducts",
        type: "InterestedProductsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactInterestedProductsType;
Modeler.register(TypeListOfContactInterestedProductsType, "TypeListOfContactInterestedProductsType");
