import { tab } from "@testing-library/user-event/dist/tab"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function  Tabs(props) {
  function handleClick(name) {
    let array = []
    props.tabs.map((key) => {
      if (key.name !== name) {
        key.current = false
      }
      else
        key.current = true
      array.push(key)
    })
    props.setTabs(array)
  }

  return (
    <div className="pb-5 border-b border-gray-200 sm:pb-0 mt-10">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Categorie</h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            onChange={(e) => (e.preventDefault, handleClick(e.target.value))}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            defaultValue={props.tabs.find((tab) => tab.current).name}
          >
            {props.tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {props.tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={(e) => (e.preventDefault, handleClick(tab.name))}
                className={classNames(
                  tab.current
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
        {
          props.tabs.find((tab) => tab.current)?.content
        }
      </div>
    </div>
  )
}
