var Modeler = require("../Modeler.js");
var className = 'TypeSortCriteriaType';

var TypeSortCriteriaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SortElement: {
      type: "TypeSortElementType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:SortElement",
        type: "SortElementType",
        attribute: false,
        ns: "WL5G3N2"
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
	  SortElement: {
      type: "TypeSortElementType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:SortElement",
        type: "SortElementType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSortCriteriaType;
Modeler.register(TypeSortCriteriaType, "TypeSortCriteriaType");
