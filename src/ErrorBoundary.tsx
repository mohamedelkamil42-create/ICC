import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public handleReload = () => {
    try {
      window.location.reload();
    } catch {
      this.setState({ hasError: false, error: null });
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div dir="rtl" className="min-h-screen bg-neutral-50 flex items-center justify-center p-4 font-sans text-neutral-900">
          <div className="max-w-md w-full bg-white border border-neutral-300 rounded-2xl p-6 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-300 mx-auto flex items-center justify-center text-neutral-800 text-xl font-bold">
              !
            </div>
            <h2 className="text-xl font-black text-neutral-900">حدث خطأ غير متوقع</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              تعذر تحميل بعض عناصر الصفحة مؤقتاً. يمكنك إعادة تحميل الصفحة للعودة فوراً إلى المرجع القانوني.
            </p>
            {this.state.error?.message && (
              <div className="text-xs bg-neutral-100 p-2.5 rounded-lg text-neutral-700 font-mono text-left overflow-x-auto dir-ltr">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={this.handleReload}
              className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-sm"
            >
              إعادة تحميل الصفحة (Reload)
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
